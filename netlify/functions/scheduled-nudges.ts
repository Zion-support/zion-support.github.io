import fetch from "node-fetch";

export const handler = async function () {/* content */}
  // This function assumes you have an internal endpoint to list users and their roles
  // For demo, just log. Replace with your actual user listing logic or Supabase RPC.
  console.log("Scheduled nudge job started");
  try {/* content */}
    // Example: call an internal endpoint that iterates users and roles
    // await fetch(`${process.env.SITE_URL}/api/onboarding/nudge-internal`, { method: "POST" });
  } catch (e) {/* content */}
    console.error("Scheduled nudge job error", e);
  }
  return { statusCode: 200, body: "ok" };
};

export const config = {/* content */}
  schedule: "@hourly",
};