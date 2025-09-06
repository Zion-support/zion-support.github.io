<<<<<<< HEAD
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true,
    },
  };
};

export default function ApiDocsRedirect() {
  return null;
}
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
