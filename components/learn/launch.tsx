import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
<<<<<<< HEAD
      permanent: false,
    },
  };
=======
      permanent: false}};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
};

export default function LaunchRedirect() {
  return null;
}
