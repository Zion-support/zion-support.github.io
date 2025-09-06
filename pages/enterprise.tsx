<<<<<<< HEAD
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise'
=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      permanent: false}}
}
export default function EnterpriseRedirect() { return null }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
