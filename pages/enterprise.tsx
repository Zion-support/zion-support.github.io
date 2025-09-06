<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


      destination: '/plans/enterprise',
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
import type { GetServerSideProps } from 'next',
import type { GetServerSideProps } from 'next';

import type { GetServerSideProps } from 'next',;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
