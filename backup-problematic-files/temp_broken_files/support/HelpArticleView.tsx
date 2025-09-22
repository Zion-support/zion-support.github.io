
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">;
          <div className="flex flex-col sm:flex-row items-center justify-between">;
            <div className="text-sm text-zion-slate-light mb-4 sm:mb-0">;
              Was this article helpful?;
            </div>;
>;
                <ThumbsUp className="h-4 w-4 mr-2" />;
                Yes;
              </Button>;

              >;
                <ThumbsDown className="h-4 w-4 mr-2" />;
                No;
              </Button>;
            </div>;
          </div>;

          {feedbackGiven === "not-helpful" && (;
            <div className="mt-4 bg-zion-blue-dark p-4 rounded-md">;
              <p className="text-sm text-zion-slate-light mb-2">;
                We're sorry this article wasn't helpful. Please contact our support team for further assistance.;
              </p>;
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">;
                Contact Support;
              </Button>;
            </div>;
          )}
        </div>;
      </Card>;
    </div>;

}
