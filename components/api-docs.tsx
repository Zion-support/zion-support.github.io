import { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs'
      permanent: true
    }
  };      permanent: true}}
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function ApiDocsRedirect() {
  return null;
}
=======
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true,
    },
  };
};
}

export default function ApiDocsRedirect() {
  return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
