import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
export default function EnterpriseRedirect() { return null }
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
      permanent: false,
    },
  };
};
}

export default function EnterpriseRedirect() {
  return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
