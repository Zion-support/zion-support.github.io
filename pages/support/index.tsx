<<<<<<< HEAD

import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps;
export default function SupportRedirect() { return null }

=======
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
      permanent: false}}
},
;
export default function SupportRedirect() { return null };
import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/help';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function SupportRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',
      permanent: false}}




import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps;
export default function SupportRedirect() { return null }
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main
