<<<<<<< HEAD
import type { GetServerSideProps } from 'next';

import type { GetServerSideProps } from 'next',;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }

<<<<<<< HEAD
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
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
