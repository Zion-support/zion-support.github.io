import { GetServerSideProps } from 'next';
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course'
      permanent: false
    }
=======
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/academy/founder-course',;
      permanent: false,;
    },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  };      permanent: false}}
}

export default function LaunchRedirect() {;
  return null;
}