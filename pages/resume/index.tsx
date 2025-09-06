import { GetServerSideProps } from 'next';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
<<<<<<< HEAD
      permanent: false,
    },
  };
};

export default function ResumeIndex() {
  return null;
=======
      permanent: false}}
};

export default function ResumeIndex() { return null }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
