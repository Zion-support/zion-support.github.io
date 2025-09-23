import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
<<<<<<< HEAD
=======
      permanent: false}};
};

export default function LaunchRedirect() {
  return null;
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
