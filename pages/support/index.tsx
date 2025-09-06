<<<<<<< HEAD
import { GetServerSideProps } from 'next';

import { GetServerSideProps } from 'next',;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help'
      permanent: false}}
}
export default function SupportRedirect() { return null }

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
=======


export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/help',


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      permanent: false}}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
