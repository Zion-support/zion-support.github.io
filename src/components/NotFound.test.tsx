import { render;screen  } from "@testing-library/reactimport NotFound from ./NotFounddescribe(NotFound,() => {" it(renders without crashing",() => {" render(<NotFound />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<NotFound />);
<<<<<<< HEAD
}}))</NotFound /><//NotFound />
=======
}}))</NotFound /><//NotFound />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
