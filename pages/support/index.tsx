<<<<<<< HEAD
import { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',
      permanent: false}}
},

export default function SupportRedirect() { return null }
=======

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/help', _permanent: false}};
};

export default function SupportRedirect() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
