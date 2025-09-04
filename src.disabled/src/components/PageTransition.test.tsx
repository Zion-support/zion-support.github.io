  it(displays expected content", () => {;
    render(<PageTransition  />)";
import { render, screen } from &apos;@testing - library/react",;
import PageTransition from &apos;./PageTransition;
describe(&apos;PageTransition&apos, () => {;
  it(&apos;renders without crashing&apos, () => {;
    render();,
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()});,
}
  it(&apos;displays expected content&apos, () => {;
    render();,
}
    // comment;
    render(<PageTransition / >)";
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();,
})";
";,
}}))