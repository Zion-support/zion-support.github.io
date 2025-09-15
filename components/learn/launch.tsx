import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
<<<<<<< HEAD
      permanent: false}};
=======
      permanent: false,
    },
  };
>>>>>>> origin/auto/autonomy-17186719616
};

export default function LaunchRedirect() {
  return null;
}
