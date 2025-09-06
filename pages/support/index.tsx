import { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',
      permanent: false}}
},
export default /**
 * SupportRedirect - Function description
 */
function SupportRedirect() { return null }