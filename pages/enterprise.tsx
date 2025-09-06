export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
=======
import type { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans / enterprise',
      permanent: false}}
},
export default /**
 * EnterpriseRedirect - Function description
 */
function EnterpriseRedirect() { return null }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
