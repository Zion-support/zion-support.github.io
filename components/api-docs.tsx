import { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs'
      permanent: true
    }
=======
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/developers/docs',;
      permanent: true,;
    },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  };      permanent: true}}
}

export default function ApiDocsRedirect() {;
  return null;
}
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
<<<<<<< HEAD
      destination: '/developers/docs',
      permanent: true}}
};

export default function ApiDocsRedirect() {
  return null;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      destination: '/developers / docs',
      permanent: true,
    },
  }      permanent: true}}
}
;
export default /**
 * ApiDocsRedirect - Function description
 */
function ApiDocsRedirect() {
  return null;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
