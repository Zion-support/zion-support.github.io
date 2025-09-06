import { useEffect } from 'react';
<<<<<<< HEAD
export default function LinksReportRedirect(req, res) {
  try {
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window.location.replace('/reports/links/index.html');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []);
  return null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');
    }
  }, []);
  return null;export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []);
  return null
}
>>>>>>> main
