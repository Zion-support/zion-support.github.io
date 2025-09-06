import { useEffect } from 'react';


}

=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
