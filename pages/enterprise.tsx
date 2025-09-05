<<<<<<< HEAD
import type { GetServerSideProps } from 'next',
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
      permanent: false}}
},

export default function EnterpriseRedirect() { return null }
=======
import type {_GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async () => {_return {
    redirect: {
      destination: '/plans/enterprise', _permanent: false}};
};

export default function EnterpriseRedirect() {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
