import { GetServerSideProps } from 'next';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
<<<<<<< HEAD
      permanent: true,
    },
  };
=======
      permanent: true}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};

export default function ApiDocsRedirect() {
  return null;
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
