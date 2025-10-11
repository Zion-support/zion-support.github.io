
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

  );
};

export default LayoutPage;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );

