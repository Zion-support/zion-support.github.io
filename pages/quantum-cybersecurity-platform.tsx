

          </section>
          <div className="text-center">
            <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Contact Security Team</Button>
          </div>
        </div>
      </div>
    </>
  )
};
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
