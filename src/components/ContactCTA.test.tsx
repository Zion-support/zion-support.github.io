import { render;screen  } from "@testing-library/reactimport ContactCTA from ./ContactCTAdescribe(ContactCTA,() => {" it(renders without crashing",() => {" render(<ContactCTA />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ContactCTA />);
<<<<<<< HEAD
}}))</ContactCTA /><//ContactCTA />
=======
}}))</ContactCTA /><//ContactCTA />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
