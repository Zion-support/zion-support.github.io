import { useEffect } from 'react';
export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html')
    }
  }, []);
<<<<<<< HEAD

  return null
}

export default function LinksReportRedirect(req, res) {
  try {

=======
  return null;export default function LinksReportRedirect() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      window && window.location.replace('/reports/links/index && index.html');
    }
  }, []);

  return null;



}
      window.location.replace ('/reports / links / index.html');
    }
  }, []);
  return null;

}


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
