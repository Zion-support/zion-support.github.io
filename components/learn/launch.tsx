import { GetServerSideProps } from 'next';
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course'
      permanent: false
    }
  };      permanent: false}}
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function LaunchRedirect() {
  return null;
}