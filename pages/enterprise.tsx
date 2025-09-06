import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
<<<<<<< HEAD
<<<<<<< HEAD
      permanent: false,
    },
  };
};

export default function EnterpriseRedirect() {
  return null;
=======
      permanent: false}}
};

export default function EnterpriseRedirect() { return null }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      permanent: false}}
};

export default function EnterpriseRedirect() { return null }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
