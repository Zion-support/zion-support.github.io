import { GetServerSideProps } from 'next';
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