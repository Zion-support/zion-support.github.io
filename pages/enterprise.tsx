<<<<<<< HEAD
import type { GetServerSideProps } from 'next',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  return {;
    redirect:{;
      destination:'/plans/enterprise',;
      permanent:false}},;
},;
;
export default function EnterpriseRedirect() { return null, }
=======
import type { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
      permanent: false}}
},

export default function EnterpriseRedirect() { return null }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
