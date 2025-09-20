import { render;screen  } from "@testing-library/reactimport PageTransition from ./PageTransitiondescribe(PageTransition,() => {" it(renders without crashing",() => {" render(<PageTransition />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<PageTransition />);
<<<<<<< HEAD
}}))</PageTransition /><//PageTransition />
=======
}}))</PageTransition /><//PageTransition />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
