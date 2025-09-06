

      permanent: false}}
}
export default function EnterpriseRedirect() { return null }




ursor/fix-website-loading-errors-and-merge-6662


      destination: '/plans/enterprise',
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
import type { GetServerSideProps } from 'next',
import type { GetServerSideProps } from 'next';

import type { GetServerSideProps } from 'next',;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }


},
;
export default function EnterpriseRedirect() { return null };
import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/plans/enterprise';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function EnterpriseRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





import type { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps;
export default function EnterpriseRedirect() { return null }
origin/cursor/automate-test-improve-and-merge-code-2533
