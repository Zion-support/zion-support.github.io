<<<<<<< HEAD
import { GetServerSideProps } from 'next',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  return {;
    redirect:{;
      destination:'/developers/docs',;
      permanent:true}},;
},;
;
export default function ApiDocsRedirect() {;
  return null,;
}
=======
import { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/developers/docs',
      permanent: true}}
},

export default function ApiDocsRedirect() {
  return null
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
