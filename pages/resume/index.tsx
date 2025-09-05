<<<<<<< HEAD
import { GetServerSideProps } from 'next',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  return {;
    redirect:{;
      destination:'/resume/preview',;
      permanent:false}},;
},;
;
export default function ResumeIndex() { return null, }
=======
import { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
      permanent: false}}
},

export default function ResumeIndex() { return null }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
