import { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
export default function ResumeIndex() { return null }
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview'
      permanent: false}}
}
export default function ResumeIndex() { return null }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
      permanent: false,
    },
  };
};
}

export default function ResumeIndex() {
  return null;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
