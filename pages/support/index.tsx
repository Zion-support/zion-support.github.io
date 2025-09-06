import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',
      permanent: false}

export default function SupportRedirect() { return null }

,
export default /**
 * SupportRedirect - Function description
 */
function SupportRedirect() { return null }
