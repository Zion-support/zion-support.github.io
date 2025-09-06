import { GetServerSideProps } from 'next';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',

=======
      permanent: false}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export default function LaunchRedirect() {
  return null,

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
