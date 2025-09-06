import { GetServerSideProps } from 'next';
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps;
export default function SupportRedirect() { return null }
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
      permanent: false}}
}
export default function SupportRedirect() { return null }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
