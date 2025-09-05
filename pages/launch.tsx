<<<<<<< HEAD
import type { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/media/kit',
      permanent: false}}
},

export default function LaunchRedirect() { return null }
=======
import type {_GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/media/kit', _permanent: false}};
};

export default function LaunchRedirect() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
