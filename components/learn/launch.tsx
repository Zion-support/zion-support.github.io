import { GetServerSideProps } from 'next'
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
      permanent: false}}
},

export default function LaunchRedirect() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/academy/founder-course', _permanent: false}};
};

export default function LaunchRedirect() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
