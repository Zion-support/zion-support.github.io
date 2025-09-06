
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/media/kit'
      permanent: false}}

export const getServerSideProps: GetServerSideProps = async () => {;
  return {;
    redirect: {;
      destination: '/media/kit';
      permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function LaunchRedirect() { return null   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======

      permanent: false}}
}
export default function LaunchRedirect() { return null }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
