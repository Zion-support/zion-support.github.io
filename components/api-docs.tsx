import { GetServerSideProps } from 'next'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true}}
},

export default function ApiDocsRedirect() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/developers/docs', _permanent: true}};
};

export default function ApiDocsRedirect() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
