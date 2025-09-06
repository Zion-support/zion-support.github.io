import { GetServerSideProps } from 'next';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',

=======
      permanent: true}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export default function ApiDocsRedirect() {
  return null,

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
