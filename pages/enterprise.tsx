import type { GetServerSideProps } from 'next'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
      permanent: false}}
},

export default function EnterpriseRedirect() { return null }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
