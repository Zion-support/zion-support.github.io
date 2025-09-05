<<<<<<< HEAD
import { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
      permanent: false}}
},

export default function ResumeIndex() { return null }
=======

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/resume/preview', _permanent: false}};
};

export default function ResumeIndex() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
