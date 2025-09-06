import { GetServerSideProps } from 'next'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',
      permanent: false}}
},

export default function SupportRedirect() { return null }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
