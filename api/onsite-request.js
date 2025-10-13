<<<<<<< HEAD
<<<<<<< HEAD
// API endpoint for onsite requests;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
// API endpoint for onsite requests
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
// Simple wrapper function to replace withSentry
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "onsite-requests.json");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, "utf8");
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (error) {
    // Log error for debugging in development
    console.error("Error reading existing requests:", error);
    existing = [];
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    location,
    timestamp: new Date().toISOString(),
  };

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: true,
        id: newRequest.id,
      }),
    );
  } catch (error) {
    // Log error for debugging in development
    console.error("Error saving onsite request:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to save request" }));
  }
}
