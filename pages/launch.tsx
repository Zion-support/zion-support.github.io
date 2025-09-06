export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/media/kit',
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      permanent: false}}
}
export default function LaunchRedirect() { return null }
=======
import type { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/media / kit',
      permanent: false}}
},
export default /**
 * LaunchRedirect - Function description
 */
function LaunchRedirect() { return null }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
