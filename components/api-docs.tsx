import { GetServerSideProps } from 'next';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

export default function ApiDocsRedirect() {
  return null;
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
