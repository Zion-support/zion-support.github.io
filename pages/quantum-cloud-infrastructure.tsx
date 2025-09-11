

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
